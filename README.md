# PSX Tools

Pakistan Stock Exchange helpers: price snapshot script, Excel calculators, Windows `.bat` updater, optional GitHub Actions.

> Snapshot data only — verify on PSX / broker before trading.

## Excel files (complete set)

| File | Purpose |
|------|---------|
| `PSX_Live_Prices.xlsx` | Latest market snapshot + PriceLookup |
| `PSX_Live_Prices_Updater.xlsx` | Full snapshot workbook + notes |
| `PSX_Calculator_Linked.xlsx` | Day trade P/L linked to PriceLookup |
| `PSX_Day_Trading_Calculator.xlsx` | PSX day trading calculator |
| `Day_Trading_Buy_Sell_Calculator.xlsx` | General buy/sell calculator |
| `Options_Trading_Calculator.xlsx` | Options P/L calculator |
| `psx_market_watch_sample.csv` | Sample CSV export |
| `data/PSX_Live_Prices.xlsx` | Same snapshot path used by Actions / bat |

## Local run

```bash
pip install -r requirements.txt
python update_psx_prices.py -o PSX_Live_Prices.xlsx --csv
python update_psx_prices.py -o data/PSX_Live_Prices.xlsx --csv
```

Windows: double-click `UPDATE_PRICES.bat`

## GitHub Actions

`.github/workflows/update-prices.yml` — weekdays + manual **Run workflow**.  
Artifacts + `data/` commit.

## Urdu guide

`README_URDU.txt`

## Disclaimer

Educational / personal use. Not financial advice.
