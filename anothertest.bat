@echo off
mode 34,10
title Timer
:start
cls
set time=10
:loop
cls
set /a time=%time%-1
if %time%==0 goto timesup
title Counting down...
echo.
echo.
echo.
echo Countdown - [%time%]
ping localhost -n 2 > nul
goto loop
:timesup
ECHO [31mTime is up...[0m
pause
goto start