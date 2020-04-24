import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    // Omite a variável id com a função Omit, pois a variável id é criada dentro do constructor
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
