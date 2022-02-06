import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { 
    Box,
    Container,
    Typography,
    InputLabel,
    Input,
    FormControl,
    FormHelperText,
    Button,
    CircularProgress
} from '@material-ui/core'

import { initialValues, validationSchema } from './formValues'
import TemplateDefault from '../../../src/templates/Default'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'

const Signin = () => {
    const classes = useStyles()
    const router = useRouter()
    const { setToasty } = useToasty()

    const handleFormSubmit = async values => {       

    }

    return (
        <TemplateDefault>
            <Container maxWidth="sm" component="main" className={classes.container}>
                <Typography component ="h1" variant="h2" align="center" color="textPrimary">
                   Entre na sua Conta
                </Typography>
            </Container>
        

            <Container maxWidth="md">
                <Box className={classes.Box}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                                isSubmitting
                            }) => {
                                return(
                                    <form onSubmit={handleSubmit}>
                                        <FormControl error={errors.email && touched.email} fullWidth>
                                            <InputLabel>E-mail</InputLabel>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={values.email}
                                                onChange={handleChange}                                       
                                            />
                                            <FormHelperText>
                                                { errors.email && touched.email ? errors.email : null }
                                            </FormHelperText> 
                                        </FormControl>

                                        <FormControl error={errors.password && touched.password} fullWidth>
                                            <InputLabel>Senha</InputLabel>
                                            <Input
                                                name="password"
                                                type="password"
                                                value={values.password}
                                                onChange={handleChange}                                       
                                            />
                                            <FormHelperText>
                                                { errors.password && touched.password ? errors.password : null }
                                            </FormHelperText> 
                                        </FormControl> 

                                        {
                                            isSubmitting
                                            ? (<CircularProgress className={classes.loading} />
                                            ) : (
                                            <Button 
                                                type="submit"
                                                fullWidth   
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                >
                                                Entrar
                                            </Button>
                                        )
                                        }

                                        
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default Signin