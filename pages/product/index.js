import {
    Container,
    Grid,
    Box,
    Typography,
    Chip,
    Card,
    CardHeader,
    Avatar,
    CardMedia
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'


import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles ((theme) => ({
    box:{
         backgroundColor: theme.palette.background.white,
         padding: theme.spacing(3),
         marginBottom: theme.spacing(3),
    },
    productName:{
        margin: '15px 0',
    },
    price: {
        fontWeight:'bold',
        marginBottom: 15,
    },
    card: {
        height:'100%',
    },
    cardMedia:{
        paddingTop: '56%',
    },
}))

const Product = () => {
    const classes = useStyles()
    return(
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel 
                                autoPlay={false} 
                                animation="slide"
                                navButtonsProps={{
                                    style:{
                                color:'white'
                                    }
                                }}  
                            >
                            <Card className={classes.card}>
                                <CardMedia 
                                className={classes.cardMedia}
                                navButtonsProps
                                image="https://source.unsplash.com/random?a=1"
                                title="Título da Imagem"
                                />
                                </Card>                          
                                <Card className={classes.card}>
                                    <CardMedia 
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random?a=2"
                                    title="Título da Imagem"
                                    />
                                </Card>
                            </Carousel>
                        </Box>

                        <Box className={classes.box} textAlign="left">
                            <Typography component="span" variant="caption">Publicado 02/02/2022</Typography>
                            <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component="h4" variant="h4" className={classes.price}>R$ 50.000,00</Typography>
                            <Chip label="categoria" />
                        </Box>
                        <Box className={classes.box} textAlign="left"> 
                        <Typography component="h6" variant="h6">Descrição</Typography>
                         <Typography component="p" variant="body2">
                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                         </Typography> 
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader 
                            avatar={
                                <Avatar>B</Avatar>
                            }
                            title="Breno Papalardi"
                            subheader="bpapalardi1@gmail.com"/>
                        
                        <CardMedia 
                            image="https://source.unsplash.com/random"
                            title="Breno Papalardi"
                        /> 
                        </Card> 

                        <Box className={classes.box}>
                        <Typography component="h6" variant="h6">
                            Localização
                        </Typography>                        
                        </Box>                                 
                        </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )

}

export default Product