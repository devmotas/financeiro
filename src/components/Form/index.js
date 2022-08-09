import React, { useState } from 'react'
import * as C from "./styles"
import Grid from '../Grid'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("")
  const [amount, setAmount] = useState("")
  const [isExpense, setExpense] = useState(false)

  const generateId = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      if (!desc && !amount) { alert("Informe a descrição e o valor!") }
      else if (!desc) { alert("Informe a descrição!") }
      else if (!amount) { alert("Informe o valor!") }
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!")
      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    }
    handleAdd(transaction)

    setAmount("")
    setDesc("")
  }

  return (
    <>
      <C.Container>

        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
        </C.InputContent>

        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name='group1'
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor='isExpansive'>Entrada</C.Label>

          <C.Input
            type="radio"
            id="rIncome"
            name='group1'
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor='isExpansive'>Saída</C.Label>

        </C.RadioGroup>

        <C.Button onClick={handleSave}>Adicionar</C.Button>

      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

export default Form