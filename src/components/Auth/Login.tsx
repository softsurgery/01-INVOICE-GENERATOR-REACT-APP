import { Container } from "../Common/ui/Container";
import { Label } from "../Common/ui/Label";

export const Login = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-200">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold md:text-2xl text-current text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
              <Label className="text-sm font-medium" >E-mail</Label>
                <input
                  type="email"
                  name="email"
                  className="sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                />
              </div>
              <div>
              <Label className="text-sm font-medium" >Password</Label>
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
                    <label className="text-white">Remember me</label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-white font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-primary font-medium rounded-lg py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="font-light text-white">
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
