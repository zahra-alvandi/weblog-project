export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f3] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-[#2E2E2E] mb-6">
          ورود به حساب کاربری
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-gray-700">ایمیل</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#E96A8D]/40"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700">رمز عبور</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#E96A8D]/40"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#E96A8D] py-3 text-white font-semibold hover:opacity-95 transition"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}
