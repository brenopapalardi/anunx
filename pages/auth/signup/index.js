import { Formik } from 'formik'
import TemplateDefault from '../../../src/templates/Default'
import { 
    Box,
    Container,
    Typography,
    InputLabel,
    Input,
    FormControl,
    FormHelperText,
    Button
} from '@material-ui/core'

import { initialValues, validationSchema } from './formValues'
import useStyles from './styles'

const Signup = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="sm" component="main" className={classes.container}>
                <Typography component ="h1" variant="h2" align="center" color="textPrimary">
                    Crie Sua Conta
                </Typography>
                <Typography component ="h5" variant="h5" align="center" color="textPrimary">
                    E anuncie para todo Brasil
                </Typography>
            </Container>
        

            <Container maxWidth="md">
                <Box className={classes.Box}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log('ok form enviado',values)

                        }}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit
                            }) => {
                                return(
                                    <form onSubmit={handleSubmit}>
                                      <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
                                            <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}                                       
                                            />
                                            <FormHelperText>
                                                { errors.name && touched.name ? errors.name : null }
                                            </FormHelperText> 
                                        </FormControl>

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

                                          <FormControl error={errors.passwordConf && touched.passwordConf} fullWidth>
                                            <InputLabel>Confirmação de Senha</InputLabel>
                                            <Input
                                                name="passwordConf"
                                                type="password"
                                                value={values.passwordConf}
                                                onChange={handleChange}                                       
                                            />
                                            <FormHelperText>
                                                { errors.passwordConf && touched.passwordConf ? errors.passwordConf : null }
                                            </FormHelperText> 
                                        </FormControl>   

                                        <Button 
                                            type="submit"
                                            fullWidth   
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                            >
                                                Cadastrar
                                        </Button>
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

export default Signup