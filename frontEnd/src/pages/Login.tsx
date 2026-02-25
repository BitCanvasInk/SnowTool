import snowball from '../assets/Snowball.png'
import CredForm from '../components/CredForm'

const Login = () => {
    return (
        <>
            {/*
              This example requires updating your template:
      
              ```
              <html class="h-full bg-white">
              <body class="h-full">
              ```
            */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="SnowBall Fin"
                        src={snowball}
                        className="mx-auto h-20 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
            </div>
            <CredForm />
        </>
    )

}

export default Login