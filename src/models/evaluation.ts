export interface EvaluationModel {
    title: string;
    tasks: EvaluationTaskModel[];
};

export interface EvaluationTaskModel {
    title: string;
    score: number;
    done: boolean;
}
