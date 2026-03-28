@echo off
cd /d "%~dp0"
echo.
echo Opening the site at http://localhost:8080 fixes many YouTube embed issues.
echo Press Ctrl+C to stop the server.
echo.
python -m http.server 8080 2>nul || py -m http.server 8080
