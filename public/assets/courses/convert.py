import sys
import os
from pathlib import Path
import pymupdf as fitz  # PyMuPDF


def convert_pdf(pdf_path: Path, output_dir: Path, max_width: int = 1000):
    try:
        doc = fitz.open(str(pdf_path))
    except Exception as e:
        print(f'Failed to open PDF {pdf_path.name}: {e}')
        return

    base_name = pdf_path.stem
    total = len(doc)
    for i, page in enumerate(doc):
        mat = fitz.Matrix(max_width / page.rect.width, max_width / page.rect.width)
        pix = page.get_pixmap(matrix=mat)
        if total == 1:
            out = output_dir / f'{base_name}.jpg'
        else:
            out = output_dir / f'{base_name}_page_{i + 1}.jpg'
        pix.save(str(out))
        print(f'Saved: {out.name}')

    doc.close()


def main():
    script_dir = Path(__file__).parent.resolve()
    if len(sys.argv) < 2:
        # Batch convert all PDFs in current directory if no argument provided
        pdf_files = sorted(script_dir.glob('*.pdf'))
        if not pdf_files:
            print('Usage: python convert.py <input.pdf> [output_dir]')
            sys.exit(1)
        print(f'Found {len(pdf_files)} PDF(s) in {script_dir}. Converting to JPG...')
        for pdf in pdf_files:
            convert_pdf(pdf, script_dir)
        print(f'Done — {len(pdf_files)} file(s) converted.')
        return

    pdf_path = Path(sys.argv[1])
    if not pdf_path.is_file():
        print(f'Error: file not found — {pdf_path}')
        sys.exit(1)

    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else pdf_path.parent
    output_dir.mkdir(parents=True, exist_ok=True)
    convert_pdf(pdf_path, output_dir)
    print('Conversion completed.')


if __name__ == '__main__':
    main()
