export async function getServerSideProps() {
    const apiUrl = 'https://randomuser.me/api/?results=10';
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      return {
        props: {
            data,
        },
      };
    } catch (error) {
      console.error('Error al obtener datos de la API', error);
      return {
        props: {
          data: null,
        },
      };
    }
}