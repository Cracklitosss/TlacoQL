import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import schema from './src/grahpql/schema';
import menuRoutes from './src/routes/menuRoutes';


const app = express();

mongoose.connect('mongodb+srv://hex:12345@cluster0.ha8qnnw.mongodb.net/Graphcito', {
});

app.use('/menu', menuRoutes);


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // Habilita el IDE de GraphQL para pruebas
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
