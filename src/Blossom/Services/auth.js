// کلیدهایی که در localStorage استفاده می‌کنیم
const USERS_KEY = "bloomy_users";
const CURRENT_USER_KEY = "bloomy_current_user";

function getUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentUser() {
  const raw = localStorage.getItem(CURRENT_USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

// ثبت‌نام
export function register({ email, password, name }) {
  const users = getUsers();

  const exists = users.find((u) => u.email === email);
  if (exists) {
    throw new Error("کاربری با این ایمیل وجود دارد");
  }

  const newUser = {
    id: Date.now(), // برای دمو همین کافیه
    email,
    password, // بهتره هش بشه، ولی برای تمرین می‌تونیم همین باشه
    name,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  return newUser;
}

// ورود
export function login({ email, password }) {
  const users = getUsers();

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    throw new Error("ایمیل یا رمز عبور اشتباه است");
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return user;
}
