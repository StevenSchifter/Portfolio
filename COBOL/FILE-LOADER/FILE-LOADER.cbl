IDENTIFICATION DIVISION.
    PROGRAM-ID. FILE-LOADER.
ENVIRONMENT DIVISION.
    CONFIGURATION SECTION.
        SPECIAL-NAMES. CONSOLE CRT.
        REPOSITORY. FUNCTION ALL INTRINSIC.
    INPUT-OUTPUT SECTION.
        FILE-CONTROL.
            SELECT Input-File
                ASSIGN "FileToLoad.txt"
                ORGANIZATION LINE SEQUENTIAL
                STATUS File-Status.
            SELECT Output-File
                ASSIGN "LoadedFile.bdb"
                ORGANIZATION INDEXED ACCESS DYNAMIC
                RECORD Output-ID-Key = Output-ID
                STATUS File-Status.
DATA DIVISION.
    FILE SECTION.
    FD Input-File GLOBAL.
    1 Input-Record.
        2 Input-Row         PIC X(128).
    FD Output-File GLOBAL.
    1 Output-Record.
        2 Output-ID         PIC 99.
        2 Output-String     PIC X(64).
    WORKING-STORAGE SECTION.
    1 File-Status           PIC XX GLOBAL.
    1 Output-Row            BINARY-LONG.
    SCREEN SECTION.
    1 Output-Screen BLANK SCREEN.
        2 Output-Line.
            3 Output-Screen-ID         PIC 99    FROM Output-ID     LINE Output-Row COL 1.
            3                          PIC X     VALUE " "          LINE Output-Row COL 3.
            3 Output-Screen-String     PIC X(64) FROM Output-String LINE Output-Row COL 4.
        2 VALUE "Press Enter to exit." LINE 11 COL 1.
PROCEDURE DIVISION.
    PERFORM Load-Input
    PERFORM Display-Output
    STOP RUN.
Load-Input.
    OPEN INPUT Input-File OUTPUT Output-File
    PERFORM FOREVER
        READ Input-File NEXT END
            EXIT PERFORM
        NOT END
            UNSTRING Input-Row DELIMITED BY "," INTO
                Output-ID
                Output-String
            END-UNSTRING
            WRITE Output-Record
        END-READ
    END-PERFORM
    CLOSE Input-File Output-File.
Display-Output.
    DISPLAY Output-Screen
    OPEN INPUT Output-File
    INITIALIZE Output-Record Output-Row Output-Line
    START Output-File KEY >= Output-ID-Key
    PERFORM FOREVER
        READ Output-File NEXT END
            EXIT PERFORM
        NOT END
            ADD 1 TO Output-Row
            MOVE Output-ID TO Output-Screen-ID
            MOVE Output-String TO Output-Screen-String
            DISPLAY Output-Line
        END-READ
    END-PERFORM
    ACCEPT OMITTED
    CLOSE Output-File.
END PROGRAM FILE-LOADER.
