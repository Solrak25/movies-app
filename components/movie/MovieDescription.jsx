import { Text, View, useColorScheme } from 'react-native';

const MovieDescription = ({ movie }) => {
  return (
    <View style={{ margin: 5 }}>
      <View style={{ flex: 'flex-row' }}>
        <Description description={movie.description} />
        <Presupuesto presupuesto={new Intl.NumberFormat('es-ES').format(movie.budget)} />
      </View>

    </View>
  )
}

const Description = ({ description }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  if (description != null && description != "") {
    return (
      <>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: isDark ? 'white' : 'black' }}>Sinopsis</Text>
        <Text style={{ marginTop: 2, color: isDark ? 'white' : 'black' }}>{description}</Text>
      </>
    )
  }
}

const Presupuesto = ({ presupuesto }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  if (presupuesto != null && presupuesto != 0) {
    return (
      <>
        <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 20, color: isDark ? 'white' : 'black' }}>Presupuesto</Text>
        <Text style={{ marginTop: 2, marginBottom: 2, marginTop: 2, color: isDark ? 'white' : 'black' }}>$ {presupuesto}</Text>
      </>
    )
  }
}

export default MovieDescription