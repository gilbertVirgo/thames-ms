import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select'
import AchievementForm from './AchievementForm';
import Recommend from './Recommend';

import {
  AchievementCard,
  AchievementModal,
  AchievementsWrapper,
} from './styles';

import {
  getAchievements,
  createAchievement,
  deleteAchievement,
  editAchievement,
  downloadAchievements,
} from './actions';



export default () => {
  const { id: student_id } = useParams();
  const [achievements, setAchievements] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [index, setIndex] = React.useState(null);
  const [ filterType, setFilterType ] = React.useState(null);


  React.useEffect(() => {
    if (!achievements) {
      (async () => {
        let ach = await getAchievements(student_id);
        setAchievements(ach);
      })();
    }
  });

  return !achievements ? (
    <p>Loading...</p>
  ) : (
    <AchievementsWrapper>
      <header>
        <h1>&#128162; Record of Achievement</h1>
        <section>
          <p>
            This is your <b>record of achievement</b>, a collection of things
            you've achieved in and outside of school, all in one place.
          </p>
        </section>
        <h2>Achievements ({achievements.length})</h2>


        <Select
          name="Type"
          placeholder="Type..."
          onChange={({ value }) => setFilterType(value)}
          options={[
            { value: null, label: 'Any' },
            { value: 'Competition', label: 'Competition' },
            { value: 'Masterclass', label: 'Masterclass' },
            { value: 'Online course', label: 'Online course' },
            { value: 'Personal project', label: 'Personal project' },
            { value: 'Reading', label: 'Reading' },
            { value: 'Work experience', label: 'Work experience' },
            { value: 'Other', label: 'Other' },
          ]}
        />
      </header>

      <div>
        {achievements.map(
          ({ Name, Description, Type, Role, Associations }, i) =>
            (!filterType || filterType == Type) && (
            <AchievementCard
              onClick={() => {
                setIndex(i);
                setIsModalOpen(true);
              }}>
              <h3>
                {Name} {Type!=='Other' && `(${Type})`}
              </h3>
              <p>{Associations && `Subjects: ${Associations.join(', ')}`}</p>
              <p>{Description}</p>
            </AchievementCard>
          )
        )}

        <AchievementCard
          onClick={async () => {
            let addition = {
              Name: 'Untitled',
              student_id: [student_id],
              Description: 'No description',
              Type: 'Other',
              Associations: [ 'Other' ]
            };

            addition.id = await createAchievement(addition);
            setAchievements([...achievements, addition]);
          }}>
          <center>
            <b>Add achievement</b>
          </center>
        </AchievementCard>
      </div>

      <div>
        <h2>Recommendations</h2>
        <section>
          <p>
            Based on your achievements, we think you might like these university courses &#127891;:
          </p>
          <Recommend achievements={achievements}/>
        </section>
      </div>

      <div>
        <h2>Download</h2>
        <section>
          <p>Download all your achievements as a perminent document</p>
          <button onClick={() => downloadAchievements(achievements)}>
            Download now
          </button>
        </section>
      </div>

      {isModalOpen && (
        <AchievementModal>
          <main>
            <AchievementForm
              selected={achievements[index]}
              onSave={(data) => {
                setAchievements([
                  ...achievements.slice(0, index),
                  data,
                  ...achievements.slice(index + 1),
                ]);
                editAchievement(achievements[index].id, data);
                setIsModalOpen(false);
              }}
            />

            <button
              onClick={() => {
                deleteAchievement(achievements[index].id);
                setAchievements([
                  ...achievements.slice(0, index),
                  ...achievements.slice(index + 1),
                ]);
                setIsModalOpen(false);
              }}>
              Delete
            </button>
          </main>
        </AchievementModal>
      )}
    </AchievementsWrapper>
  );
};
