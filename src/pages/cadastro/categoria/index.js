import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(infosDoEvento) {
        const { getAttribute, value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            value,
        );
    }

    useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
            ? 'http://localhost:3000/categorias' : 'https://aluraflix-luciano.herokuapp.com/categorias';
        fetch(URL_TOP)
            .then(async (serverResponse) => {
                const response = await serverResponse.json();
                setCategorias([
                    ...response,
                ]);
            });
    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria:
        {values.nome}
            </h1>
            <form onSubmit={function handleSubmit(infosEvento) {
                infosEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);
                setValues(valoresIniciais);
            }}
            >
                <FormField
                    label="Nome da Categoria"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                />
                {categorias.length === 0 && (
                    <div>
                        {/* Cargando... */}
          Loading...
                    </div>
                )}

                <Button>
                    Cadastrar
        </Button>

            </form>
            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.nome}`}>
                        {categoria.nome}
                    </li>
                ))}
            </ul>
            <Link to="/">
                Ir para home
      </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
