import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover.jsx';
import QuestionCard from './components/QuestionCard.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import ProgressPanel from './components/ProgressPanel.jsx';

const QUESTIONS = [
  {
    id: 1,
    text: 'Which HTML tag is used to define a hyperlink?\nSelect the correct option.',
    options: [
      { value: 'a', label: '<a>' },
      { value: 'link', label: '<link>' },
      { value: 'href', label: '<href>' },
      { value: 'hyper', label: '<hyper>' },
    ],
  },
  {
    id: 2,
    text: 'CSS stands for:',
    options: [
      { value: 'casc', label: 'Cascading Style Sheets' },
      { value: 'comp', label: 'Computer Style Sheets' },
      { value: 'color', label: 'Colorful Style Sheets' },
      { value: 'create', label: 'Creative Style System' },
    ],
  },
  {
    id: 3,
    text: 'Which method converts a JSON string to a JavaScript object?',
    options: [
      { value: 'parse', label: 'JSON.parse()' },
      { value: 'string', label: 'JSON.stringify()' },
      { value: 'tojson', label: 'toJSON()' },
      { value: 'obj', label: 'Object.fromJSON()' },
    ],
  },
  {
    id: 4,
    text: 'In React, which hook is used for managing state in a function component?',
    options: [
      { value: 'useState', label: 'useState' },
      { value: 'useEffect', label: 'useEffect' },
      { value: 'useMemo', label: 'useMemo' },
      { value: 'useRef', label: 'useRef' },
    ],
  },
  {
    id: 5,
    text: 'HTTP status code 404 indicates:',
    options: [
      { value: 'ok', label: 'OK' },
      { value: 'notfound', label: 'Not Found' },
      { value: 'server', label: 'Internal Server Error' },
      { value: 'perm', label: 'Permanent Redirect' },
    ],
  },
  {
    id: 6,
    text: 'Which of the following is a NoSQL database?',
    options: [
      { value: 'mysql', label: 'MySQL' },
      { value: 'postgres', label: 'PostgreSQL' },
      { value: 'mongo', label: 'MongoDB' },
      { value: 'sqlite', label: 'SQLite' },
    ],
  },
  {
    id: 7,
    text: 'Flexbox property used to align items along the main axis is:',
    options: [
      { value: 'justify', label: 'justify-content' },
      { value: 'align', label: 'align-items' },
      { value: 'place', label: 'place-content' },
      { value: 'gap', label: 'gap' },
    ],
  },
  {
    id: 8,
    text: 'Which command initializes a new Git repository?',
    options: [
      { value: 'gitinit', label: 'git init' },
      { value: 'gitstart', label: 'git start' },
      { value: 'gitcreate', label: 'git create' },
      { value: 'gitrepo', label: 'git repo init' },
    ],
  },
  {
    id: 9,
    text: 'Which array method creates a new array with elements that pass a test?',
    options: [
      { value: 'map', label: 'map()' },
      { value: 'filter', label: 'filter()' },
      { value: 'reduce', label: 'reduce()' },
      { value: 'forEach', label: 'forEach()' },
    ],
  },
  {
    id: 10,
    text: 'Tailwind CSS is primarily a:',
    options: [
      { value: 'utility', label: 'Utility-first CSS framework' },
      { value: 'component', label: 'Component library' },
      { value: 'pre', label: 'Preprocessor' },
      { value: 'reset', label: 'CSS reset' },
    ],
  },
];

const initialSelections = Array(QUESTIONS.length).fill(null);
const initialStatuses = Array(QUESTIONS.length).fill('unseen');

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState(initialSelections);
  const [statuses, setStatuses] = useState(initialStatuses);

  const attempted = useMemo(() => statuses.filter((s) => s === 'attempted').length, [statuses]);
  const skipped = useMemo(() => statuses.filter((s) => s === 'skipped').length, [statuses]);
  const completed = attempted + skipped;

  const currentSelection = selections[currentIndex];
  const currentStatus = statuses[currentIndex];

  const handleSelect = (value) => {
    setSelections((prev) => {
      const next = [...prev];
      next[currentIndex] = value;
      return next;
    });
    setStatuses((prev) => {
      const next = [...prev];
      next[currentIndex] = 'attempted';
      return next;
    });
  };

  const goPrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const goNext = () => {
    setStatuses((prev) => {
      const next = [...prev];
      if (!selections[currentIndex] && next[currentIndex] !== 'attempted') {
        next[currentIndex] = 'skipped';
      }
      return next;
    });
    setCurrentIndex((i) => Math.min(QUESTIONS.length - 1, i + 1));
  };

  const jumpTo = (i) => setCurrentIndex(i);

  const q = QUESTIONS[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        <HeroCover />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <QuestionCard
              question={q.text}
              options={q.options}
              index={currentIndex}
              total={QUESTIONS.length}
              selectedOption={currentSelection}
              onSelect={handleSelect}
              status={currentStatus}
            />

            <NavigationBar
              onPrev={goPrev}
              onNext={goNext}
              isFirst={currentIndex === 0}
              isLast={currentIndex === QUESTIONS.length - 1}
            />
          </div>

          <div className="lg:col-span-1">
            <ProgressPanel
              total={QUESTIONS.length}
              attempted={attempted}
              skipped={skipped}
              completed={completed}
              currentIndex={currentIndex}
              statuses={statuses}
              onJumpTo={jumpTo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
