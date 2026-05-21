export default function Login() {
  return (
    <div className="mx-auto lg:container">
      <div className="rounded-3xl bg-white p-8 shadow-xl grid md:grid-cols-2">
        <div className=" grid grid-rows-2">
          <div className="flex items-center justify-center">
            <img
              src="/bloomyImages/jipsofilia.png"
              className="bg-transparent w-1/2"
              alt=""
            />
          </div>

          <div className="p-9">
            <h1 className="text-2xl font-bold text-[#2E2E2E] mb-6">
              ورود به حساب کاربری
            </h1>

            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  ایمیل
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="md:w-3/4 rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#E96A8D]/40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  رمز عبور
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="md:w-3/4 rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#E96A8D]/40"
                />
              </div>

              <button
                type="submit"
                className="rounded-2xl bg-[#E96A8D] px-7 py-3  text-white font-semibold hover:opacity-95 transition"
              >
                ورود
              </button>
            </form>
          </div>
        </div>

        <div className="hidden md:block overflow-hidden">
          <img
            src="/bloomyImages/aboutusPic.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
