import React from "react";
import { History, LocationState } from "history";

interface MyComponentProps {
  history: History<LocationState>;
}

export default class AboutPage extends React.Component<MyComponentProps, {}> {
  listPage = () => {
    const { history } = this.props;
    history.push("/");
  };
  render() {
    return (
      <div className="aboutPages">
        <h1>AboutPages</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque
          quam dolores dolorem officia inventore quod, non eos rem magni
          temporibus unde voluptatem sed labore ea praesentium quisquam laborum
          veniam? Aliquam maiores cumque quis reiciendis! Aliquam eveniet
          incidunt quis, ea adipisci perspiciatis consequuntur, nisi praesentium
          et magni, accusantium delectus. Ea consequuntur itaque perspiciatis
          mollitia incidunt totam facilis distinctio doloremque dolorem? Commodi
          cupiditate officia, consectetur exercitationem dolorum culpa
          reiciendis necessitatibus, magni pariatur deleniti doloribus in cumque
          dolores maiores quia! Veniam et veritatis voluptates ab atque ut
          suscipit magni dolorum consequatur nostrum! Debitis excepturi repellat
          eos itaque voluptates dolor, laudantium tempora! Quisquam voluptatum
          aliquid aut repudiandae. Tempore laudantium maiores, autem culpa
          expedita at id explicabo, fuga consectetur natus aperiam, libero ullam
          iusto?
        </p>
        <button className="btn" onClick={this.listPage}>
          Обратно к списку дел
        </button>
      </div>
    );
  }
}
