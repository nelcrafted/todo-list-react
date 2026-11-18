# Todo List — React.js
Aplikasi To-Do List frontend (React + Vite) untuk Kuis Praktikum. Data memakai dummy dan state React.

## Fitur
- Menampilkan daftar tugas
- Melihat detail tugas (`/todo/:id`)
- Menambah tugas lewat modal form
- Memperbarui tugas lewat modal form
- Menghapus tugas dengan konfirmasi
- Notifikasi (toast) setelah tambah, update, dan hapus
- Validasi form (judul dan deadline wajib diisi)

## Struktur data
`id`, `title`, `description`, `priority`, `deadline`, `status`

## Menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:5173

## Screenshot
### Daftar Todo
![Daftar Todo](screenshots/list.png)
### Tambah Todo
![Tambah Todo](screenshots/add.png)
### Detail Todo
![Detail Todo](screenshots/detail.png)
### Update Todo
![Update Todo](screenshots/update.png)
### Konfirmasi Hapus
![Konfirmasi Hapus](screenshots/delete.png)
