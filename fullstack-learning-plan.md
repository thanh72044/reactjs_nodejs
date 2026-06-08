# Lộ trình học Fullstack (React.js + Node.js) Xen Kẽ trong 8 Tuần

> [!TIP]
> Đây là lộ trình học theo phương pháp **Vertical Slicing** (Cắt dọc tính năng). Bạn sẽ học cách kết nối Client (Giao diện) và Server (Máy chủ) ngay từ những tuần đầu tiên, giúp bạn hiểu rõ bản chất luồng đi của dữ liệu.

---

## Tuần 1: Khởi tạo Cấu trúc & Hello World (✅ Đã hoàn thành)
*Mục tiêu: Chạy thành công 2 môi trường và hiểu kiến trúc Client-Server.*

### 🟢 React.js (Frontend)
- [x] Cài đặt Node.js trên máy tính.
- [x] Khởi tạo dự án React bằng Vite (`npm create vite@latest`).
- [x] Cấu trúc thư mục cơ bản của React.
- [x] **JSX là gì?** Cách viết HTML bên trong file JavaScript.
- [x] Xóa code mặc định, in ra màn hình dòng chữ "Hello từ React".

### 🔵 Node.js (Backend)
- [x] Khởi tạo dự án Node (`npm init -y`).
- [x] Cài đặt framework **Express.js** và **Nodemon** (chạy lại server tự động).
- [x] Viết một server cơ bản nghe ở cổng 5000.
- [x] Tạo một API `/api/hello` trả về đoạn text "Hello từ Server".

---

## Tuần 2: Lấy dữ liệu (Data Fetching) (✅ Đã hoàn thành)
*Mục tiêu: React (Client) chủ động gọi lấy dữ liệu từ Node.js (Server).*

### 🔵 Node.js
- [x] Sửa API `/api/movies` để trả về một danh sách (Array) các đối tượng JSON (ví dụ: mảng 3 bộ phim với id, title, image).
- [x] **CORS là gì?** Tại sao trình duyệt chặn dữ liệu và cách cài đặt thư viện `cors` trong Express để cho phép React lấy dữ liệu.

### 🟢 React.js
- [x] **State (`useState`)**: Khái niệm về trạng thái, tạo một state để chứa danh sách phim.
- [x] **Lifecycle & `useEffect`**: Chạy code 1 lần duy nhất khi web vừa load xong.
- [x] Dùng `fetch` hoặc cài đặt thư viện `axios` để gọi API `/api/movies`.
- [x] Hàm `map()` trong JavaScript: Hiển thị mảng dữ liệu ra màn hình (Render List).

---

## Tuần 3: Form & Đẩy dữ liệu (POST Request) (✅ Đã hoàn thành)
*Mục tiêu: Gửi dữ liệu mới từ người dùng lên Server.*

### 🟢 React.js
- [x] Cách tạo Form trong React (Controlled Components).
- [x] Bắt sự kiện bàn phím: `onChange`, lấy giá trị từ ô Input.
- [x] Bắt sự kiện bấm nút: `onSubmit`, chặn hành vi load lại trang (`e.preventDefault()`).
- [x] Gửi dữ liệu (POST request) chứa thông tin phim mới lên Server.

### 🔵 Node.js
- [x] Hiểu về **Request Body**. Cấu hình Express để đọc được định dạng JSON (`express.json()`).
- [x] Tạo API `POST /api/movies` để nhận dữ liệu phim mới.
- [x] In (Console.log) dữ liệu nhận được ra terminal để xác nhận thành công.
- [x] Trả về thông báo (Response) cho React: "Đã nhận dữ liệu!".

---

## Tuần 4: Cơ sở dữ liệu (Database) (✅ Đã hoàn thành)
*Mục tiêu: Thay vì lưu tạm bợ, ta sẽ lưu trữ dữ liệu vĩnh viễn vào Database.*

### 🔵 Node.js
- [x] Giới thiệu **MongoDB** (NoSQL Database). Đăng ký tài khoản MongoDB Atlas (miễn phí) trên mạng.
- [x] Cài đặt thư viện **Mongoose** vào Node.js.
- [x] Cách kết nối Node.js với cơ sở dữ liệu MongoDB thông qua URL.
- [x] Tạo Schema & Model (Định nghĩa cấu trúc dữ liệu cho Phim).
- [x] Sửa API POST ở Tuần 3: Lưu dữ liệu nhận được trực tiếp vào MongoDB thay vì log ra màn hình.
- [x] Sửa API GET ở Tuần 2: Lọc dữ liệu từ MongoDB để trả về cho React.

### 🟢 React.js
- [x] Cập nhật UI: Hiển thị chữ "Đang tải..." (Loading state) trong lúc chờ lấy dữ liệu từ DB. (Tuỳ chọn)
- [x] Cập nhật danh sách (refetch) ngay lập tức sau khi thêm phim mới thành công.

---

## Tuần 5: Hoàn thiện ứng dụng CRUD (✅ Đã hoàn thành)
*Mục tiêu: Cập nhật (Update) và Xóa (Delete) dữ liệu - Mảnh ghép cuối cùng.*

### 🔵 Node.js
- [x] Tạo API `DELETE /api/movies/:id` - Tìm phim theo ID trong Database và xóa đi.
- [x] Tạo API `PUT /api/movies/:id` - Tìm phim theo ID và cập nhật nội dung.

### 🟢 React.js
- [x] Thêm nút "Sửa" và "Xóa" bên cạnh mỗi bộ phim trên giao diện.
- [x] Gắn hàm gọi API Xóa vào nút Xóa. Xử lý xóa phần tử đó khỏi State của React (để UI ẩn đi mà không cần load lại trang).
- [x] Làm giao diện Sửa: Bấm "Sửa", hiển thị thông tin cũ lên ô Input, chỉnh sửa và bấm "Lưu".

---

## Tuần 6: Điều hướng (Routing)
*Mục tiêu: Chia trang web thành nhiều trang khác nhau (Trang chủ, Chi tiết).*

### 🟢 React.js
- [x] Cài đặt thư viện `react-router-dom`.
- [x] Khởi tạo kiến trúc chia Trang (Pages) thay vì nhét tất cả vào 1 màn hình.
- [x] Tạo các route: `/` (Trang danh sách), `/movie/:id` (Trang xem chi tiết một bộ phim).
- [x] Cách lấy tham số (id) từ thanh địa chỉ URL.
- [x] Gắn API vào Trang Chi Tiết để hiển thị thông tin phim thực tế.

### 🔵 Node.js
- [x] Tạo API `GET /api/movies/:id` - Trả về dữ liệu chi tiết của một bộ phim dựa vào cái ID mà React gửi lên.

---

## Tuần 7: Xác thực (Authentication) - *Nâng cao*
*Mục tiêu: Đăng ký / Đăng nhập (Login/Register).*

> [!WARNING]
> Tuần này khá khó và mang tính logic cao, bạn có thể dành nhiều thời gian hơn cho tuần này.

### 🔵 Node.js
- Tạo bảng dữ liệu (Model) cho Người dùng (User).
- Viết API Đăng ký: Học cách băm/mã hóa mật khẩu bằng `bcrypt` trước khi lưu vào DB.
- Viết API Đăng nhập: So sánh mật khẩu, nếu đúng thì tạo ra thẻ **JWT (JSON Web Token)** để trả về.
- Tạo Middleware chặn các API (ví dụ: chỉ người đã đăng nhập mới được Xóa phim).

### 🟢 React.js
- Tạo Form Đăng ký và Đăng nhập.
- Gửi API lấy token về, lưu trữ token đó vào LocalStorage (Bộ nhớ trình duyệt).
- **Context API**: Tạo một kho chứa toàn cục (Global state) để cả ứng dụng biết user này đã đăng nhập hay chưa (để thay nút "Login" thành Avatar người dùng).

---

## Tuần 8: Triển khai đưa web lên mạng (Deployment)
*Mục tiêu: Khoe thành quả với bạn bè và nhà tuyển dụng.*

- **Quản lý phiên bản:** Đẩy toàn bộ code Frontend và Backend lên **GitHub**.
- **Biến môi trường (.env):** Ẩn các thông tin nhạy cảm (như link kết nối Database, mật khẩu) ra khỏi code chính.
- **Deploy Backend:** Đưa Node.js server lên nền tảng miễn phí (như **Render**, **Railway**, hoặc **Heroku**).
- **Deploy Frontend:** Đưa React.js lên **Vercel** hoặc **Netlify**.
- Cấu hình lại link gọi API trong React trỏ đến đường dẫn mới trên mạng thay vì `localhost`.
