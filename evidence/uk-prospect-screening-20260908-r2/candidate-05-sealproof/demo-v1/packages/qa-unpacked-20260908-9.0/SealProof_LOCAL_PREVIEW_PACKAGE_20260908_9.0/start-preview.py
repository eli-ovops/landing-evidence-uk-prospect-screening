import argparse, os, runpy
from pathlib import Path
parser = argparse.ArgumentParser(description="SealProof local preview")
parser.add_argument("--port", type=int, default=8771)
args = parser.parse_args()
os.environ["SEALPROOF_PORT"] = str(args.port)
os.environ["SEALPROOF_ORIGIN"] = f"http://127.0.0.1:{args.port}"
os.environ["SEALPROOF_SEND_AUTHORIZED"] = "NO"
runpy.run_path(str(Path(__file__).resolve().parent / "backend" / "app.py"), run_name="__main__")
