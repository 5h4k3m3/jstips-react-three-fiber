import { Image, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";

const Images = () => {
  return (
    <group>
      <Image url="./images/img1.jpeg" scale={[4, 3, 1]} position={[-1, 0, 1]} />
      <Image url="./images/img2.jpeg" scale={3} position={[2, 0, 1]} />
      <Image
        url="./images/img3.jpeg"
        scale={[1, 3.5, 1]}
        position={[-2.3, 0, 2]}
      />
      <Image
        url="./images/img4.jpeg"
        scale={[1.4, 2, 1]}
        position={[-1.3, 0, 3.2]}
      />
    </group>
  );
};

function App() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={3}>
        <Scroll>
          <Images />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
