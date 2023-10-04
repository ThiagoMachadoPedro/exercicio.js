import { useState, useEffect } from "react";
import style from './Perfil.module.css'



const Formulario = () =>{
const [altura , setAltura] = useState();
const [peso , setPeso] = useState();

const converteAltura = altura / 100
const imc = peso / converteAltura**2 ;



const  obsidade = () => {
  if(imc < 18.5){
    return(
    <p className={style.result}>Você está muito abaixo do peso!!!</p>)
  }else if(imc < 24.9){
    return(
    <p className={style.result}>Você está com peso ideal!!!</p>)
  }else if(imc < 29.9){
    return(
    <p className={style.result}>Você está com sobrepeso!!!</p>)
  }else if(imc < 39.9){
    return(
    <p className={style.result}>Você está com obesidade!!!</p>)
  }else if(imc > 39.9){
    return(
    <p className={style.result}>Você está com obesidade mórbida!!!</p>)
  }
}

useEffect(() => {


  },[])

  return(
    <form action="">
      <div className={style.container}>
      <h1 className={style.titulo}>Teste React--IMC</h1>



      <input className={style.input} type="number" min="0.50" placeholder="Altura"  onBlur={evento => setAltura(parseInt(evento.target.value))} />

    <input className={style.input} type="number" min="1" placeholder="Peso" onBlur={evento => setPeso(parseInt(evento.target.value))} />



<p className={style.imc}  typeof="number"><p>IMC</p>{imc.toFixed(3)}</p>



{obsidade()}

<h2 className={style.classificacao}>Tabela de Classificação de IMC</h2>
    <table className={style.table}>
        <tr>
            <th className={style.th}>IMC</th>
            <th className={style.th}>Classificação</th>
        </tr>
        <tr>
            <td className={style.td}>Menor que 18.5</td>
            <td className={style.td}>Abaixo do peso</td>
        </tr>
        <tr>
            <td className={style.td}>18.5 - 24.9</td>
            <td className={style.td}>Peso normal</td>
        </tr>
        <tr>
            <td className={style.td}>25.0 - 29.9</td>
            <td className={style.td}>Sobrepeso</td>
        </tr>
        <tr>
            <td className={style.td}>30.0 - 34.9</td>
            <td className={style.td}>Obesidade grau I</td>
        </tr>
        <tr>
            <td className={style.td}>35.0 - 39.9</td>
            <td>Obesidade grau II</td>
        </tr>
        <tr>
            <td className={style.td}>Maior ou igual a 40.0</td>
            <td className={style.td}>Obesidade grau III ou mórbida</td>
        </tr>
    </table>













</div>
    </form>

  )
}
export default Formulario;
