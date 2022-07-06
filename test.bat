@ECHO OFF
TITLE System information
ECHO [32mPlease wait... Checking system information...[0m
ECHO.
ECHO =========================
ECHO WINDOWS INFO
ECHO =========================
systeminfo | findstr /c:"Host Name"
systeminfo | findstr /c:"OS Name"
systeminfo | findstr /c:"OS Version"
systeminfo | findstr /c:"System Type"
systeminfo | findstr /c:"Processor(s)"
ECHO =========================
ECHO HARDWARE INFO 
ECHO =========================
ECHO ram info
systeminfo | findstr /c:"Total Physical Memory"
ECHO cpu info
wmic cpu get name
ECHO disk info
wmic diskdrive get name,model,size
ECHO graphics info
wmic path win32_videocontroller get name
ECHO startup proccesses
wmic startup get name
ECHO =========================
ECHO NETWORK INFO
ECHO =========================
ipconfig | findstr IPv4
ipconfig | findstr IPv6
ECHO [31mWARNING! CLOSING IN 30s...[0m
timeout 30 >nul
exit