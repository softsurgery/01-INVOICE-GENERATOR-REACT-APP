import { Container } from "../common/Container";

export const Login = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-slate-100">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold md:text-2xl text-current">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  className="sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="sm:text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="">Remember me</label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary font-medium rounded-lg py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light ">
                Don&apos;t have an account yet?{" "}
                <a href="#" className="font-medium hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
