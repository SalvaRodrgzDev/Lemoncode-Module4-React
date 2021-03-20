import React from 'react';
import { CharacterDetail } from '../components/character-detail';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

export const DetailPage: React.FC = () => {

  return (
    <>
      <CharacterDetail />
      <Link component={RouterLink} to='/'>Back to list page</Link>
    </>
  );
};
