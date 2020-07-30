import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Create Category</h1>

      <form>

        <label>
          Name of category:
          <input
            type="text"
          />
        </label>

        <button>
          Save
        </button>
      </form>


      <Link to="/">
        Go home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;