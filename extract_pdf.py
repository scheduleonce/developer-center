from pypdf import PdfReader
import sys
from pathlib import Path
pdf_path = r"c:\Users\reeva.satija_oncehub\Downloads\Introduction to DevCenter.pdf"
out_path = Path("build/extracted_introduction.txt")
reader = PdfReader(pdf_path)
texts = []
for p in reader.pages:
    t = p.extract_text()
    if t:
        texts.append(t)
out_path.parent.mkdir(parents=True, exist_ok=True)
out_path.write_text("\n\n".join(texts), encoding="utf-8")
print(f"WROTE: {out_path}")
