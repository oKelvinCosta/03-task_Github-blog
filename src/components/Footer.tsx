export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1200px] mx-auto">
        <section className="flex flex-col relative min-h-[100px] p-5 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col relative mt-5">
            <div className="gap-5 flex max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                  className="aspect-[1.42] object-cover object-center w-full min-h-5 min-w-5 overflow-hidden my-auto"
                  alt="Content image"
                />
              </div>
              <div className="flex flex-col w-[67%] ml-5 max-md:ml-0 max-md:w-full">
                <div className="relative mt-5 text-3xl font-semibold">
                  Um novo conteúdo!
                </div>
                <div className="relative mt-5">
                  <div>
                    Mussum Ipsum, cacilds vidis litro abertis.&nbsp; Suco de
                    cevadiss deixa as pessoas mais interessantis. Aenean
                    aliquam molestie leo, vitae iaculis nisl. Pellentesque
                    nec nulla ligula. Donec gravida turpis a vulputate
                    ultricies. Si num tem leite então bota uma pinga aí
                    cumpadi!
                  </div>
                  <div>
                    <br />
                  </div>
                  Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
                  tellus tristique interdum. Manduma pindureta quium dia
                  nois paga. Pra lá, depois divoltis porris, paradis.
                  Praesent vel viverra nisi. Mauris aliquet nunc non turpis
                  scelerisque, eget.Enter some text...
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container text-center py-10 max-w-[1280px] mx-auto">
        Reproduzido com 💙 por Kelvin Costa
      </div>
    </footer>
  );
}
