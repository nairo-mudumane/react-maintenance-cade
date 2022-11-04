import { PageContainer } from "../page-container";
import { MainButton } from "../button-main";

export function Hero() {
  return (
    <section>
      <PageContainer>
        <div className="my-4 px-0 md:px-8 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center text-3xl italic md:text-6xl lg:text-7xl font-extrabold uppercase mb-4">
              Estamos em <br />
              manutenção
            </h2>
            <MainButton text="Contacte" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
