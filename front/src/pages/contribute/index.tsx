import EditorComponent from "@/components/EditorComponent";
import { Alternative, Question, Road, Topic } from "@/data/road";
import { Table, Form, Input, Checkbox, Button, Select } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getRoads } from "services/roadService";
import styled from "styled-components";

export default function Contribute() {
  const [roads, setRoads] = useState<Road[]>([]);
  const [selectedRoad, setSelectedRoad] = useState<Road>();

  const [form] = Form.useForm();

  useEffect(() => {
    const getData = async () => {
      const data = await getRoads();
      setRoads(data);
    };
    getData();
  }, []);

  return (
    <Content>
      {!selectedRoad ? (
        <>
          <h1>Roads</h1>
          <Button
            type="primary"
            onClick={() => {
              setSelectedRoad({
                id: roads.length + 1,
                name: "",
                color: "",
                description: "",
                topics: [],
              } as Road);
            }}
          >
            Add Road
          </Button>
          <Table
            columns={roadColumns}
            dataSource={roads}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  form.setFieldsValue(record);
                  setSelectedRoad(record);
                },
              };
            }}
          />
        </>
      ) : (
        <div style={{ display: "flex" }}>
          <RoadEdit road={selectedRoad} setRoad={setSelectedRoad} />
          <pre style={{ background: "#ebeaea", width: "30%" }}>
            <code>{JSON.stringify(selectedRoad, null, 2)}</code>
          </pre>
        </div>
      )}
    </Content>
  );
}

const RoadEdit = ({
  setRoad,
  road,
}: {
  setRoad: Dispatch<SetStateAction<Road | undefined>>;
  road: Road;
}) => {
  const [selectedTopic, setSelectedTopic] = useState<Topic>();

  useEffect(() => {
    if (selectedTopic) {
      const index = road?.topics.findIndex(
        (topic) => topic.id === selectedTopic?.id
      );
      debugger;

      if (index !== undefined && index >= 0 && road?.topics) {
        const copy = { ...road };

        copy.topics[index] = { ...selectedTopic };

        setRoad({ ...road, ...copy });
      } else {
        const copy = { ...road } as Road;

        copy.topics && copy.topics.push({ ...selectedTopic });

        setRoad({ ...road, ...copy });
      }
    }
  }, [selectedTopic]);

  return selectedTopic ? (
    <TopicEdit topic={selectedTopic} setTopic={setSelectedTopic} />
  ) : (
    <Form
      style={{ width: "70%", paddingRight: "20px" }}
      name="basic"
      layout="vertical"
      onValuesChange={(changedValues, allValues) => {
        setRoad((prev) => ({ ...prev, ...allValues }));
      }}
    >
      <h1>Road Edit</h1>
      <Form.Item
        label="id"
        name="id"
        initialValue={road.id}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        label="name"
        name="name"
        initialValue={road.name}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="description"
        name="description"
        initialValue={road.description}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="color" name="color" initialValue={road.color}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          onClick={() => {
            setRoad(undefined);
          }}
        >
          Back
        </Button>

        <Button
          onClick={() => {
            setSelectedTopic({
              id: road.topics.length + 1,
              name: "",
              description: "",
              questions: [],
            } as Topic);
          }}
        >
          add topic
        </Button>
      </Form.Item>

      <Table
        style={{ marginTop: "100px" }}
        columns={topicColumns}
        dataSource={road.topics}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              setSelectedTopic(record);
            },
          };
        }}
      />
    </Form>
  );
};

const TopicEdit = ({
  setTopic,
  topic,
}: {
  setTopic: Dispatch<SetStateAction<Topic | undefined>>;
  topic: Topic;
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question>();

  useEffect(() => {
    if (selectedQuestion) {
      const index = topic?.questions.findIndex(
        (question) => question.id === selectedQuestion?.id
      );

      if (index !== undefined && index >= 0 && topic?.questions) {
        const copy = { ...topic };

        copy.questions[index] = { ...selectedQuestion };

        setTopic({ ...topic, ...copy });
      } else {
        const copy = { ...topic } as Topic;

        copy.questions && copy.questions.push({ ...selectedQuestion });

        setTopic({ ...topic, ...copy });
      }
    }
  }, [selectedQuestion]);

  return selectedQuestion ? (
    <QuestionEdit
      setQuestion={setSelectedQuestion}
      question={selectedQuestion}
    />
  ) : (
    <Form
      style={{ width: "70%", paddingRight: "20px" }}
      name="basic"
      layout="vertical"
      onValuesChange={(changedValues, allValues) => {
        setTopic((prev) => ({ ...prev, ...allValues }));
      }}
    >
      <h1>Topic Edit</h1>
      <Form.Item
        label="id"
        name="id"
        initialValue={topic.id}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        label="name"
        name="name"
        initialValue={topic.name}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="description"
        name="description"
        initialValue={topic.description}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={() => setTopic(undefined)}>Back</Button>

        <Button
          onClick={() =>
            setSelectedQuestion({
              id: topic.questions.length + 1,
              name: "",
              answerId: 0,
              level: 1,
              alternatives: [],
            } as Question)
          }
        >
          add Question
        </Button>
      </Form.Item>

      <Table
        style={{ marginTop: "100px" }}
        columns={QuestionColumns}
        dataSource={topic.questions}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              setSelectedQuestion(record);
            },
          };
        }}
      />
    </Form>
  );
};

const QuestionEdit = ({
  setQuestion,
  question,
}: {
  setQuestion: Dispatch<SetStateAction<Question | undefined>>;
  question: Question;
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState<Alternative>();

  useEffect(() => {
    if (selectedAlternative) {
      const index = question?.alternatives.findIndex(
        (alternative) => alternative.id === selectedAlternative?.id
      );

      if (index !== undefined && index >= 0 && question?.alternatives) {
        const copy = { ...question };

        copy.alternatives[index] = { ...selectedAlternative };

        setQuestion({ ...question, ...copy });
      } else {
        const copy = { ...question } as Question;

        copy.alternatives && copy.alternatives.push({ ...selectedAlternative });

        setQuestion({ ...question, ...copy });
      }
    }
  }, [selectedAlternative]);

  return selectedAlternative ? (
    <>
      <AlternativeEdit
        alternative={selectedAlternative}
        setAlternative={setSelectedAlternative}
      />
    </>
  ) : (
    <Form
      style={{ width: "70%", paddingRight: "20px" }}
      name="teste"
      layout="vertical"
      onValuesChange={(changedValues, allValues) => {
        setQuestion((prev) => ({ ...prev, ...allValues }));
      }}
    >
      <h1>Question Edit</h1>
      <Form.Item
        label="id"
        name="id"
        initialValue={question.id}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        label="name question"
        name="name"
        initialValue={question.name}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
      </Form.Item>
        <EditorComponent />
      <Form.Item
        label="answerId"
        name="answerId"
        initialValue={question.answerId}
      >
        <Select>
          {question.alternatives.map((alternative) => (
            <Select.Option value={alternative.id} key={alternative.id}>
              {alternative.content}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="level" name="level" initialValue={question.level}>
        <Select>
          <Select.Option value={1}>easy</Select.Option>
          <Select.Option value={2}>medium</Select.Option>
          <Select.Option value={3}>hard</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={() => setQuestion(undefined)}>Back</Button>

        <Button
          onClick={() => {
            setSelectedAlternative({
              id: question.alternatives.length + 1,
              content: "",
            });
          }}
        >
          add Alternatives
        </Button>
      </Form.Item>

      <Table
        style={{ marginTop: "100px" }}
        columns={alternativesColumns}
        dataSource={question.alternatives}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log(record);
              setSelectedAlternative(record);
            },
          };
        }}
      />
    </Form>
  );
};

const AlternativeEdit = ({
  setAlternative,
  alternative,
}: {
  setAlternative: Dispatch<SetStateAction<Alternative | undefined>>;
  alternative: Alternative;
}) => {
  return (
    <Form
      style={{ width: "70%", paddingRight: "20px" }}
      layout="vertical"
      onValuesChange={(changedValues, allValues) => {
        setAlternative((prev) => ({ ...prev, ...allValues }));
      }}
    >
      <h1>Alternative Edit</h1>
      <Form.Item label="id" name="id" initialValue={alternative.id}>
        <Input value={alternative.id} disabled />
      </Form.Item>
      <Form.Item
        label="content"
        name="content"
        initialValue={alternative.content}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={() => setAlternative(undefined)}>Back</Button>
      </Form.Item>
    </Form>
  );
};

const roadColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Color ",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
];

const topicColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Color ",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
];

const QuestionColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "answerId ",
    dataIndex: "answerId",
    key: "color",
  },
  {
    title: "level",
    dataIndex: "level",
    key: "level",
  },
];

const alternativesColumns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "content ",
    dataIndex: "content",
    key: "content",
  },
];

const Content = styled.div`
  padding: 0px 200px 0px 200px;
  background: white;
`;
