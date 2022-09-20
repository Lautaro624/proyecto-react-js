import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const albums = [
    {   id: 1, 
        image: "../images/gibson-lespaul-bonamassa.png", 
        category:"prog", title: "Joe Bonamassa lazzarus 1959 Les Paul Standard", 
        description: "Cuando la leyenda de la guitarra de blues-rock Joe Bonamassa encontró Lazarus, una rara Gibson Les Paul™ Standard de 1959, estaba en malas condiciones y había sido pintada de rojo. Al igual que el Lázaro bíblico, la guitarra original de Joe volvió a la vida. Una vez que se restauró, se reveló su parte superior asombrosamente tallada. Ahora Joe Bonamassa vuelve a colaborar con Epiphone, esta vez con una guitarra inspirada en su Gibson™ Lazarus 1959 Les Paul Standard. Con un mástil de caoba de una pieza, un cuerpo de caoba con tapa de arce, rematado con una chapa de arce flameado AAAA de grano ancho, está equipado con pastillas Gibson BurstBucker™ y cableado estilo años 50 con potenciómetros CTS® y condensadores Mallory™. Viene en un estuche de estilo vintage con gráficos de Bonamassa. También se incluye un Certificado de Autenticidad."
    },
    {   id: 2, 
        image: "../images/epiphone-sg-standard.png", 
        category:"prog", 
        title: "Epiphone SG Standard 60s Maestro Vibrola - Cereza Vintage", 
        description: "El Epiphone SG™ Standard 60s Maestro™ Vibrola de la nueva colección Inspired by Gibson™ recrea el SG original de 1961 con un Maestro Vibrola de estilo años 60 de nuevo diseño. Con un cuerpo de caoba clásico en un acabado Vintage Cherry y potenciado por humbuckers ProBucker™ con potenciómetros CTS®. (Anteriormente llamado SG Standard '61 Maestro Vibrola)"
    },
    {   id: 3, 
        image: "../images/epiphone-explorer.png", 
        category: "rock", 
        title: "Epiphone Explorer", 
        description: "El Epiphone Explorer de la colección Inspired by Gibson recrea el clásico ultra raro de 1958. Cuenta con un cuerpo de caoba con un acabado de ébano brillante, humbuckers Epiphone ProBucker con electrónica CTS y afinadores Grover."
    
    },
    {   id: 4, 
        image: "../images/flying-v.png", 
        category: "rock", 
        title: "Flying V Prophecy", 
        description: "La colección Epiphone Prophecy recientemente renovada presenta formas de cuerpo icónicas inspiradas en Gibson ™ con un toque moderno para jugadores que buscan romper la tradición y establecer nuevos estándares en velocidad, sonido y técnica. Al frente y en el centro hay un par de pastillas Fishman Fluence® con voz personalizada que ofrecen tres tonos distintos: un cálido humbucker ™ vintage Patent Applied For, un humbucker moderno y brillante y un sonido de bobina simple optimizado y brillante, todo accedido por empuje /tirar potenciómetros de volumen y tono. El Flying V™ Prophecy también incluye afinadores Rotomatic® con bloqueo Grover®, puente y cordal LockTone™ Tune-O-Matic™ de Epiphone para mayor sustain, una tuerca Graph Tech® NuBone® que aumenta el contenido armónico y aumenta la estabilidad de afinación, unión personalizada, ébano diapasón, trastes jumbo y un mástil asimétrico SlimTaper™ para mayor comodidad y velocidad. Disponible en una tapa de arce labrado AAA en Yellow Tiger Aged Gloss o una tapa lisa en Black Aged Gloss. El estuche se vende por separado."
    },
    
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(albums);
            }, 250);
        });

        getData.then(res => setData(res.find(album => album.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;