import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Create Video</h1>

      <Link to="/cadastro/categoria">
        Save
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo; 