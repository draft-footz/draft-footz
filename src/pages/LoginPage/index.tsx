import { BackgroundDiv, FormBox } from "./styles"
import { Logo } from "../../components/Logo"
import { StyledFormInput } from "../../styles/Inputs/style"
import { AppleButton } from "../../components/SocialLogin/Apple"
import { GoogleButton } from "../../components/SocialLogin/Google"
import { ButtonSend } from "../../styles/Buttons/style"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"

interface iForm {
    email: string;
    password: string;
}

export const LoginPage = () => {

    const { register, handleSubmit, formState: { errors }} = useForm<iForm>({
        resolver: yupResolver(registerSchema),
        mode: "onBlur",
    })

    const loginRequest = (data: iForm) => {
        console.log(data)
    }

    return (
        <BackgroundDiv>
            <FormBox>
                <Logo></Logo>
                <form
                onSubmit={handleSubmit(loginRequest)}
                noValidate>
                    <h2>Login</h2>
                    <StyledFormInput 
                    placeholder="Endereço de e-mail"
                    type="email"
                    id="email"
                    {...register("email")}
                    />
                    {errors.email?.message && <span>{errors.email.message}</span>}
                    <StyledFormInput 
                    placeholder="Senha"
                    type="password"
                    id="password"
                    {...register("password")}/>
                    {errors.password?.message && <span>{errors.password.message}</span>}
                    <div>
                        <small>Esqueceu a senha?</small>
                    </div>
                    <ButtonSend
                    type="submit">Login</ButtonSend>
                </form>
                <h4>Logue com</h4>
                <div className="social">
                    <AppleButton />
                    <GoogleButton />
                </div>
                <p>Ainda não possui uma conta? <Link to={"/register"} className="link">Registre-se</Link></p>
            </FormBox>
        </BackgroundDiv>
    )
}