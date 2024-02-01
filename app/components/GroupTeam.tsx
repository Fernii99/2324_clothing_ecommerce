
export default function GroupTeam (){

    const people = [
        {
          id: 1,
          name: 'Persona 1',
          edad: '20',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id:2,
            name: 'Persona 2',
            edad: '21',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id:3,
            name: 'Persona 3',
            edad: '20',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ]

    return(
        
              <div className="flex  w-full bg-primary  justify-around py-24 sm:py-32">
                <div className="flex flex-col w-5/6 align-center justify-center">
                  <div className=" w-full">
                    <h2 className="text-7xl font-bold  text-white ">Conócenos</h2>
                    <p className="mt-6 text-lg text-white w-3/6">
                    Bienvenidos a nuestro espacio creativo en el mundo del patronaje. Somos un grupo apasionado que comparten un amor por la moda y la confección, y nos dedicamos al estudio y perfeccionamiento del arte del patronaje. Aquí podreis encontrar parte de nuestros trabajos realizados durante los años de estudio.
                    </p>
                  </div>
                  <div className="flex flex-row w-full mt-5">
                    {people.map((person) => (
                    <div key={person.id} className="border-solid border-2 border-black rounded-xl w-2/3 p-5 mx-8 ">
                        <div >

                            <div className="flex  gap-x-6">
                            <img className="h-40 w-40 rounded-3xl" src={person.imageUrl} alt="" />
                            <div className=" pt-5">
                                <h3 className="text-3xl font-semibold text-gray-900">{person.name}</h3>
                                <p className="text-2xl text-gray-900">{person.edad}</p>

                            </div>
                            </div>
                        </div> 
                    </div>
                    ))}
                    </div>
                  
                </div>
              </div>
    )
}