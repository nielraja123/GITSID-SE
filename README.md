Screenshot Program

1. A000124 of Sloane’s OEIS
   - ![Alt text](/1.jpg "Screenshot Program 1")
2. Dense Ranking

- ![Alt text](/2.jpg "Screenshot Program 2")

3. Balanced Bracket

- ![Alt text](/3.jpg "Screenshot Program 1")
- Kompleksitas waktu:
  - Melintasi ekspresi karakter demi karakter memerlukan waktu O(n).
  - Operasi push dan pop pada stack memerlukan waktu konstan.
  - Mengembalikan "NO" jika ukuran stack tidak kosong memerlukan waktu O(stackSize), yang pada skenario terburuk dapat mencapai n.
  - Karena hanya melakukan operasi push dan pop pada stack saat karakter adalah pembuka atau penutup kurung, dan melintasi seluruh ekspresi hanya sekali, kompleksitas waktu akhirnya adalah O(n).
- Kompleksitas ruang:
- Code menggunakan sebuah stack untuk menyimpan karakter pembuka kurung, sehingga kompleksitas ruangnya adalah O(stackSize). Dalam skenario terburuk, stackSize dapat mencapai n, yaitu ketika semua karakter dalam ekspresi adalah pembuka kurung.
- Jadi, kompleksitas waktu algoritma ini adalah O(n), dan kompleksitas ruangnya adalah O(n).
