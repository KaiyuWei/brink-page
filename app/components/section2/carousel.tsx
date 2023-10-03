<Carousel>
  <div className="bg-black" style={{ width: "100%", height: "8rem" }}>
    &nbsp;
  </div>
  <div>
    {pics.map((pic) => (
      <img src={pic.download_url} alt={pic.author} />
    ))}
  </div>
</Carousel>;
