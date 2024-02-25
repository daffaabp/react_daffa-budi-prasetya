## Berikut link g.docs Tugas 2_Github
[https://docs.google.com/document/d/1rW04n6wZMQsLi43IOnEcgAvuRUGXPmpVSpQbwT05quw/edit?usp=sharing](https://docs.google.com/document/d/1rW04n6wZMQsLi43IOnEcgAvuRUGXPmpVSpQbwT05quw/edit?usp=sharing)

## Rangkuman
Git secara mudah dapat dipahami sebagi salah satu sistem pengontrol versi pada proyek perangkat lunak yang bertugas untuk mencatat setiap perubahan pada file proyek yang dikerjakan oleh banyak orang maupun sendiri.

## Manfaat Git
- Dapat menyimpan seluruh versi source code
- Dapat berkolaborasi dalam tim dengan mudah
- Dapat berkontribusi ke proyek open-source
- Lebih aman digunakan karena kita bisa tahu apa yang diubah dan siapa yang mengubahnya

## Kondisi File dalam Git
##### 1. Modified
_Modified_ adalah kondisi dimana revisi atau perubahan sudah dilakukan, tetapi belum ditandai dan belum disimpan di version control. 

##### 2. Staged
_Staged_ adalah kondisi dimana revisi sudah ditandai, tetapi belum disimpan di version control. Untuk mengubah kondisi file dari modified ke staged gunakan perintah `git add nama_file`.
Contoh :
```
git add index.html
git add about.html
git add contact.html
```

##### 3. Commit
_Commited_ adalah kondisi dimana revisi sudah disimpan di version control. perintah untuk mengubah kondisi file dari staged ke commited adalah `git commit -m "nama pesan"`.
Contoh :
```
git commit -m "membuat file index.html"
```

## Perintah Dalam Git
1. Untuk melihat catatan log perubahan pada repositori kita, dapat menggunakan perintah `git log --oneline`
2. Untuk melihat perbandingan perubahan yang dilakukan pada commit tertentu, kita dapat menggunakan perintah `git diff`
    Contoh :
    1. melihat perbandingan pada file `git diff index.html`
    2. melihat perbandingan antara commit satu dengan yang lainnya `git diff <nomer commit> <nomer commit>`
    3. melihat perbandingan antar cabang (branch) `git diff <nama cabang> <nama cabang>`
3. Perintah untuk membatalkan perubahan itu ada 4 keadaan :
    1. Jika perubahan kita belum staged ataupun committed, kita bisa mengembalikannya menggunakan perintah `git checkout nama_file.html`.
    2. Membatalkan Perubahan File yang Sudah dalam Kondisi staged dengan perintah `git reset nama_file.html`.
    3. Membatalkan Perubahan File yang Sudah dalam Kondisi Commited dapat diatasi dengan perintah `git checkout b05f7d05c9298f2cd11b870369f3cf4b2350eca7 nama_file.html`
    4. Jika kita ingin mengembalikan semua file ke suatu commit, kita bisa melakukannya dengan perintah `git revert -n <nomer commit>`
4. Perintah untuk membuat branch baru : `git branch fitur_register`
5. Perintah untuk berpindah branch : `git checkout nama_branch`
6. Perintah untuk melihat list remote branch : `git branch -a`
7. Perintah untuk menghapus branch yang sudah digunakan : `git branch -d fitur_register`
8. Perintah `git checkout` mengembalikan file dalam kondisi sebelumnya, tapi bersifat sementara.
9. Perintah `git reset`, akan mengembalikan file ke kondisi sebelumnya, kemudian menghapus catatan sejarah commit beikutnya.
10. Perintah `git revert` mengembalikan file dengan tidak menghapus sejarah commit.
11. Perintah `git fetch` hanya akan mengambil revisi (commit) saja dan tidak langsung melakukan penggabungan (merge) terhadap repository lokal.
12. Sedangkan `git pull` akan mengambil revisi (commit) dan langsung melakukan penggabungan (merge) terhadap repository lokal.

## Catatan
> Gunakan perintah git pull saat tidak ada commit yang pernah dilakukan di lokal. Sedangkan perintah git fetch digunakan kalau sudah ada commit yang dilakukan.

> Penggunaan git fetch lebih aman, karena kita akan melakukan merge branch secara manual. Sehingga kita bisa terhindar dari bentrokan.

> Perintah git pull biasanya digunakan untuk sync repo lokal dengan remote.

> Jika kita menggunakan Git pada VS Code, ada salah satu extension yang dapat memudahkan yaitu **GitLens**

> -- Daffa Budi Prasetya --