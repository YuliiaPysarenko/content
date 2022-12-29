import React from "react";
import Container from '../../components/Container/Container';
import Contacts from '../../components/Contacts/Contacts';
import styles from './ContactsPage.module.scss';

export default function ContactsPage() {
  return (
  <Container className={styles.contactsPage}>
    <Contacts />
  </Container>
  )
}