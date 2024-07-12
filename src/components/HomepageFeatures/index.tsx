import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  wip?: boolean;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'PixiJS powered',
    image: '/img/features/pixijs.svg',
    description: (
        <>
          The fastest 2D Web Renderer is used to render your games. The underlying Pixi objects are still accessible.
        </>
    ),
  },
  {
    title: 'TypeScript first',
    image: '/img/features/typescript.svg',
    description: (
        <>
          Chibi Engine is made with strict typing in mind to help you avoid errors.
        </>
    ),
  },
  {
    title: 'Assets loading',
    image: '/img/features/assets.webp',
    description: (
        <>
          Don’t even care about loading assets, just use them. Chibi Engine will load them for you.
        </>
    ),
  },
  {
    title: 'ECS',
    image: '/img/features/ecs.svg',
    description: (
        <>
          Use the Entity Component System to divide your game objects into reusable components.
        </>
    ),
  },
  {
    title: 'Transitions',
    image: '/img/features/transitions.svg',
    description: (
        <>
          Make your game smooth for every refresh rate with transitionable props.
        </>
    ),
  },
  {
    title: 'Interactivity',
    image: '/img/features/interactivity.webp',
    description: (
        <>
          Listen for keyboard, mouse and touchscreen interactions.
        </>
    ),
  },
  {
    title: 'Camera',
    image: '/img/features/camera.webp',
    description: (
        <>
          To follow the player of your game across the world.
        </>
    ),
  },
  {
    title: 'Scene lifecycle',
    image: '/img/features/scene.webp',
    wip: true,
    description: (
        <>
          Divide your game in separate scenes and make transition between them.
        </>
    ),
  },
  {
    title: 'Audio',
    image: '/img/features/audio.svg',
    wip: true,
    description: (
        <>
          Play audio with built-in volume control for sound effects and musics.
        </>
    ),
  },
  {
    title: 'Physics',
    image: '/img/features/box2d.svg',
    wip: true,
    description: (
        <>
          Unleash the power of Box2D for any 2D game physics.
        </>
    ),
  },
];

function Feature({title, image, description, wip}: FeatureItem) {
  return (
      <div className="relative">
        {wip && <p className="absolute top-0 right-0 text-[32px]">🚧</p>}
        <div className="flex items-center justify-center h-20">
          <img src={image} alt={title + " icon"} className="w-full h-full object-contain" role="img"/>
        </div>
        <div className="text-center">
          <p className="mb-0 text-[30px] font-bold text-[#2196f3]">{title}</p>
          <p className="font-medium">{description}</p>
        </div>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
      <section className="px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1300px] m-auto bg-white">
        {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
        ))}
      </section>
  );
}
