import { createClient } from '@sanity/client'
import imageUtlBuilder from '@sanity/image-url';

export const client = createClient(
    {
        projectId: '27p517bf',
        dataset: 'production',
        apiVersion: '2024-12-01',
        useCdn: true,
        token: 'skrDmRH2RjfGiJKn5tWPhkN9yYssLHsHIL5b4Qpb5wh7h2GOegjsQAlJ1xO2QuYZd7Tdt3HPEoTbWfxBOtC1muE3beu9Lqa5x1uGFdqP6rhshdC3zPhMwSuszzJtFSsD0XuiJOK8twaBZFoX2kmPWaQjfXcr4ren1ZvHr7wD03SenqSt6UuH'

    }
)

const builder = imageUtlBuilder(client);

export const urlFor = (source) => builder.image(source);
