

const MainPage = () => {
  return (
    <>
      <article className='flex self-start bg-black h-max'>
        <Nav/>
        <div className='flex xl:pl-60 pl-20'>
          <div className='mr-14 ml-14 flex flex-col'>
          <Header />
          <section className='flex flex-col items-center gap-y-4'>
            {
              new Array(5).fill(1).map((_, i) => (
                <Post key={i} index={i} />
              ))
            }
          </section>
          </div>
          <NavBar />
        </div>
      </article>
    </>
  );
}

export default MainPage;