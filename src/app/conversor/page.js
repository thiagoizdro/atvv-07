'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useState } from 'react'
import { Button, CardImg, Form, Modal } from 'react-bootstrap'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'

const currencyRates = {
    dollar: 0.20,
    euro: 0.18,
    bitcoin: 0.000003,
};

export default function Page() {
    const [showModal, setShowModal] = useState(false);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [currency, setCurrency] = useState('');

    const calcular = (dados) => {
        const conversionRate = currencyRates[dados.moeda];
        const result = (dados.valor * conversionRate).toFixed(6);

        setConvertedAmount(result);
        setCurrency(dados.moeda);
        setShowModal(true);
    };

    return (
        <Pagina titulo="Conversor de Moedas - Formik">
            <div>
                <CardImg src='imc/imagem-conversor.png' />
            </div>

            <Formik
                initialValues={{
                    valor: '0',
                    moeda: ''
                }}
                onSubmit={values => calcular(values)}
            >
                {({ values, handleChange, handleSubmit, handleReset }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-2'>
                            <Form.Label>Valor em R$:</Form.Label>
                            <Form.Control
                                name='valor'
                                type='number'
                                min={0}
                                value={values.valor}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className='mb-2'>
                            <Form.Label>Moeda:</Form.Label>
                            <Form.Select
                                name='moeda'
                                value={values.moeda}
                                onChange={handleChange}
                            >
                                <option value="" label="Selecione uma moeda" />
                                <option value="dollar" label="Dólar" />
                                <option value="euro" label="Euro" />
                                <option value="bitcoin" label="Bitcoin" />
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className='mb-2 text-center'>
                            <Button type="submit" className='me-2'>
                                <FaCheck /> Converter
                            </Button>
                            <Button onClick={handleReset}>
                                <FaTrashAlt /> Limpar
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>

            {/* Modal do resultado */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado da Conversão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>O valor convertido é {convertedAmount} {currency}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Pagina>
    );
}
