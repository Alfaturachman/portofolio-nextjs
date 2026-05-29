import sys
import os
from pathlib import Path
import fitz  # PyMuPDF


def main():
    if len(sys.argv) < 2:
        print('Usage: python convert.py <input.pdf> [output_dir]')
        sys.exit(1)

    pdf_path = sys.argv[1]

    if not os.path.isfile(pdf_path):
        print(f'Error: file not found — {pdf_path}')
        sys.exit(1)

    output_dir = sys.argv[2] if len(sys.argv) > 2 else os.path.dirname(pdf_path) or '.'
    Path(output_dir).mkdir(parents=True, exist_ok=True)

    base_name = Path(pdf_path).stem

    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f'Failed to open PDF: {e}')
        sys.exit(1)

    MAX_WIDTH = 1000

    total = len(doc)
    for i, page in enumerate(doc):
        mat = fitz.Matrix(MAX_WIDTH / page.rect.width, MAX_WIDTH / page.rect.width)
        pix = page.get_pixmap(matrix=mat)
        out = Path(output_dir) / f'{base_name}_page_{i + 1}.jpg'
        pix.save(str(out))
        print(f'Saved: {out}')

    doc.close()
    print(f'Done — {total} page(s) converted.')


if __name__ == '__main__':
    main()
