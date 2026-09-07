@echo off
title PSX Price Updater
color 0A
cd /d "%~dp0"

echo ============================================
echo   PSX Live / Snapshot Price Updater
echo ============================================
echo.
echo Folder: %cd%
echo.

where python >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python nahi mila.
    echo https://www.python.org/downloads/
    echo Install ke time "Add Python to PATH" tick karna.
    pause
    exit /b 1
)

echo Packages check / install...
python -m pip install -r requirements.txt -q
if errorlevel 1 (
    echo [ERROR] Packages install nahi hue.
    echo Try: python -m ensurepip --upgrade
    pause
    exit /b 1
)

if not exist data mkdir data

echo.
echo PSX se prices fetch ho rahi hain...
echo.

python update_psx_prices.py -o PSX_Live_Prices.xlsx --csv
copy /Y PSX_Live_Prices.xlsx data\PSX_Live_Prices.xlsx >nul
if exist PSX_Live_Prices.csv copy /Y PSX_Live_Prices.csv data\PSX_Live_Prices.csv >nul

if errorlevel 1 (
    echo.
    echo [ERROR] Script fail ho gayi.
) else (
    echo.
    echo ============================================
    echo   DONE
    echo   - PSX_Live_Prices.xlsx
    echo   - data\PSX_Live_Prices.xlsx
    echo ============================================
)

echo.
pause
