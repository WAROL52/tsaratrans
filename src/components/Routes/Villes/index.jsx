import React, { useContext } from 'react'
import { AppContexte } from '../../../App';
import NavVille from './NavVille';

export default function Villes() {
  const { villes } = useContext(AppContexte);
  return <NavVille villes={villes} />;
}
