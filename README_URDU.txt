================================================================================
          PSX TOOLS — MUKAMMAL HADAYAT (URDU / ROMAN URDU GUIDE)
================================================================================

Yeh folder Pakistan Stock Exchange (PSX) ke liye tools rakhta hai:
- Live / snapshot prices
- Day trading calculator
- Options calculator
- Web demo
- Ek click se price update (Windows .bat)

--------------------------------------------------------------------------------
1) FOLDER MEIN KYA HAI
--------------------------------------------------------------------------------

UPDATE_PRICES.bat
    Windows pe double-click → PSX se rates laata hai

update_psx_prices.py
    Python script (bat isi ko chalati hai)

PSX_Live_Prices.xlsx
    Latest prices (Live Prices + PriceLookup sheets)

PSX_Calculator_Linked.xlsx
    Trading calculator JO prices se linked hai (XLOOKUP)
    Sheets: Trade Calculator | PriceLookup | Trade Log | How to Refresh

PSX_Day_Trading_Calculator.xlsx
    Alag day-trading calculator (PKR / fees)

Day_Trading_Buy_Sell_Calculator.xlsx
    General buy/sell calculator

Options_Trading_Calculator.xlsx
    Options P/L calculator

PSX_Live_Prices_Updater.xlsx
    Pehli wali detailed snapshot + English notes

psx_market_watch_sample.csv
    Sample CSV export

index.html + style.css + script.js
    Browser / CodePen demo (sample data — live nahi)

README_URDU.txt
    Yeh hadayat file

--------------------------------------------------------------------------------
2) WINDOWS PE PEHLI DAFA SETUP
--------------------------------------------------------------------------------

A) Python install karein (agar nahi hai):
   https://www.python.org/downloads/
   Install ke waqt ZAROORI: "Add python.exe to PATH" tick karein

B) Agar bat mein "No module named pip" aaye to Command Prompt mein:
   python -m ensurepip --upgrade
   python -m pip install --upgrade pip
   python -m pip install requests beautifulsoup4 pandas openpyxl lxml

C) PSX_Tools folder Desktop (ya jahan extract kiya) pe rakhein

--------------------------------------------------------------------------------
3) RATES UPDATE KARNA (ROZANA)
--------------------------------------------------------------------------------

1. Folder kholen
2. UPDATE_PRICES.bat par DOUBLE-CLICK karein
3. Black window mein progress dikhegi
4. "DONE - File: PSX_Live_Prices.xlsx" aaye to success
5. PSX_Live_Prices.xlsx khol kar rates dekh sakte hain

Agar error aaye:
- Python PATH mein nahi → Python dubara install + PATH tick
- Internet band → net on karke dubara try
- "Table not found" → site change; message hamein bhejein

--------------------------------------------------------------------------------
4) CALCULATOR + LIVE PRICE (LINKED FILE)
--------------------------------------------------------------------------------

File: PSX_Calculator_Linked.xlsx

Kaise use karein:
1. File kholen → sheet "Trade Calculator"
2. Cell B5 mein ticker likhein (maslan HBL) ya dropdown se choose karein
3. Cell B7 mein price KHUD aa jayegi (PriceLookup se)
4. Quantity, Entry, Exit, Brokerage bharein
5. Neeche Net P/L, Return %, Break-even nikal aayega

Trade Log sheet:
- Apni trades date / ticker / qty / entry / exit likhein
- Net P/L formula pehle se lagi hui hai
- Neeche Total Net P/L

Taza rates linked calculator mein lane ka tareeqa:
1. UPDATE_PRICES.bat chalaein
2. PSX_Live_Prices.xlsx kholen → sheet "PriceLookup"
3. Ctrl+A → Copy
4. PSX_Calculator_Linked.xlsx → sheet "PriceLookup"
5. A1 par Paste (Replace)
6. Save karein — ab naye rates calculator mein milenge

--------------------------------------------------------------------------------
5) SIRF EXCEL CALCULATORS (BINA PYTHON)
--------------------------------------------------------------------------------

Agar Python nahi chalana:
- PSX_Day_Trading_Calculator.xlsx
- Day_Trading_Buy_Sell_Calculator.xlsx
- Options_Trading_Calculator.xlsx

In mein prices MANUAL likhni hongi (broker app / dps.psx.com.pk se)

--------------------------------------------------------------------------------
6) WEB DEMO (BROWSER)
--------------------------------------------------------------------------------

index.html par double-click → browser mein table + Quick P/L
Yeh SAMPLE data hai — live PSX nahi (browser CORS limit)

CodePen / CodeSandbox mein:
- HTML, CSS, JS alag panels mein paste
- Multi-file project ho to index.html mein link zaroori:
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>

--------------------------------------------------------------------------------
7) PSX MARKET — MUKHTASAR TAREEQA-E-KAR
--------------------------------------------------------------------------------

Roz:
1. UPDATE_PRICES.bat
2. PSX_Live_Prices / Calculator se banks + heavyweights dekhein
3. dps.psx.com.pk aur news (Business Recorder / Tribune)
4. TradingView charts (optional)
5. Calculator mein risk + P/L
6. Trade Log mein record

Day trade tips:
- Liquid stocks (HBL, UBL, OGDC, LUCK, FFC, SYS, etc.)
- Brokerage ~0.15% one-way default — apne broker se match karein
- Geopolitics / oil spike par size chhota rakhein
- ±10% thin stocks se bachiye jab tak volume samajh na aaye

--------------------------------------------------------------------------------
8) IMPORTANT PATHS (MISAL)
--------------------------------------------------------------------------------

Aapke PC par kuch is tarah ho sakta hai:
  Desktop\PSX_Tools\PSX_Tools\
  ya
  Desktop\PSX_Tools\

UPDATE_PRICES.bat hamesha USI folder mein honi chahiye
jahan update_psx_prices.py aur Excel files hain.

--------------------------------------------------------------------------------
9) MASLA → HAL
--------------------------------------------------------------------------------

Problem: bat khulti nahi / Python nahi mila
Hal: Python install + PATH; cmd mein "python --version" check

Problem: No module named pip
Hal: python -m ensurepip --upgrade

Problem: Packages install nahi hue
Hal: python -m pip install requests beautifulsoup4 pandas openpyxl lxml

Problem: Calculator mein price "Ticker nahi mila"
Hal: PriceLookup refresh karein; symbol sahi likhein (HBL na ke hbl spaces)

Problem: Excel formula #VALUE! / #N/A
Hal: Ticker blank na ho; PriceLookup sheet maujood ho; XLOOKUP Excel 365/2021+

--------------------------------------------------------------------------------
10) ZIMMEDARI
--------------------------------------------------------------------------------

- Data dps.psx.com.pk se snapshot hai — delay ho sakta hai
- Trading se pehle broker / official PSX se confirm karein
- Yeh tools taleem / personal use ke liye hain; financial advice nahi

================================================================================
  Kamiyabi: UPDATE_PRICES.bat → Excel → Calculator
  Madad chahiye ho to error ka screenshot / text bhejein
================================================================================
